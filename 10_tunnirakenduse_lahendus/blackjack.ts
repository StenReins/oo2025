let initialName = prompt("Sisesta oma nimi") || ""

//HAND CREATION PORTION

class Card { //ühe kaardi väärtuse arvutamise class
    constructor(public suit, public cardValue) {
        this.suit = suit;
        this.cardValue = cardValue;
    }

    getValue() {
        if (['J', 'Q', 'K'].includes(this.cardValue)) {
            return 10;
        } else if (this.cardValue === 'A') {
            return 11;
        } else {
            return parseInt(this.cardValue);
        }
    }

    toString(){
        return `${this.cardValue}${this.suit}`;
    }
}

class Deck { //kaardipakk
    suits: string[] = ['♠', '♥', '♦', '♣'];
    values: string[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    allCards:Card[] = [];
    constructor() {
        this.initDeck();
        this.shuffle();
    }

    initDeck() { //pushib kaardipakki kõik kaardid
        for (let suit of this.suits) {
            for (let value of this.values) {
                this.allCards.push(new Card(suit, value));
            }
        }
    }

    shuffle() { 
        const { allCards } = this;
        for (let i = 0; i < allCards.length - 1; i++) { //shuffle algorithm
            const j = Math.floor(Math.random() * (i + 1));
            [allCards[i], allCards[j]] = [allCards[j], allCards[i]];
        }
    }

    drawOne(): Card { //võtab kaardipaki pealt kaardi

        const card = this.allCards.pop();
        if(!card){
            throw new Error('null');
        }
        return card
    }
}

class Hand {  //hand
    cards: Card[] 
    constructor() {
        this.cards = [];
    }

    addCard(card: Card) {
        this.cards.push(card);
    }

    getValues() {
        let total = 0; 
        let aces = 0; 

        for (let card of this.cards) { 
            let val = card.getValue(); 
            if (val === 11) aces++;
            total += val;
        }

        while (total > 21 && aces > 0) {
            total -= 10;
            aces -= 1;
        }

        return total;
    }

    isBust() {
        return this.getValues() > 21;
    }

    isBlackjack() {
        return this.cards.length === 2 && this.getValues() === 21;
    }

    toString(){
        return this.cards.map(card => card.toString()).join(' ');
    }
}

//GAME PORTION
class User{ //Kasutaja, regamine ja logimine, tema andmed
    users: string[];
    name: string;
    balance: number;
    wins: number;
    losses: number;
    constructor(name, balance, wins, losses){ //user data
        this.users = JSON.parse(localStorage.getItem('users') || '[]');
        this.name = initialName;
        this.balance = 1000;
        this.wins = 0;
        this.losses = 0;

        if(this.users.includes(this.name)){
            this.selectUser();
        }
        else{
            this.saveUser();
        }
    }

    saveUser(){ //ka konto loomisel kasutatav?
        let user = {
            balance: this.balance,
            wins: this.wins,
            losses: this.losses
        }
        localStorage.setItem(this.name, JSON.stringify(user))
    }

    selectUser() {
        const userData = JSON.parse(localStorage.getItem(this.name) || '');
        if (userData) {
            this.balance = userData.balance;
            this.wins = userData.wins;
            this.losses = userData.losses;
        }
    }
}

class Player extends User{ //Kasutaja kui mängijana
    hand: Hand;
    bet: number;
    constructor(name: string) { //@ts-ignore
        super(name);
        this.hand = new Hand();
        this.bet = 0;
    }

    resetHand() {
        this.hand = new Hand();
    }

    placeBet(amount) {
        if(amount > this.balance || amount <=0) return false; 
        this.bet = amount;
        this.balance -= amount;
        this.saveUser();
        return true;
    }

    win(betMultiplier) {
        // võit
        this.balance += this.bet * betMultiplier;
        this.wins++;
        this.bet = 0;
        this.saveUser();
    }

    push() {
        this.balance += this.bet;
        this.bet = 0;
        this.saveUser();
    }

    lose() {
        this.losses++;
        this.bet = 0;
        this.saveUser();
    }
}

class BlackjackGame {
    deck: Deck;
    player: Player;
    dealer: Player;

    isPlayerTurn: boolean = false;
    isGameActive: boolean = false;

    hitButton: HTMLButtonElement | null = null;
    standButton: HTMLButtonElement | null = null;

    uiElements = {
        startBtn: document.querySelector('#startGame') as HTMLButtonElement,
        dealerCardsDiv: document.querySelector('.dealerCards') as HTMLDivElement,
        playerCardsDiv: document.querySelector('.playerCards') as HTMLDivElement,
        dealerDealsSpan: document.querySelector('#dealerDeals') as HTMLSpanElement,
        playerContainer: document.querySelector('.playerContainer') as HTMLDivElement,
        userBalanceSpan: document.querySelector('#userBalance') as HTMLSpanElement,
        userWinsSpan: document.querySelector('#userWins') as HTMLSpanElement,
        userLossesSpan: document.querySelector('#userLosses') as HTMLSpanElement
    };

    constructor() {
        this.deck = new Deck();

        this.player = new Player(initialName);
        this.dealer = new Player('Dealer');

        this.uiElements.startBtn.addEventListener('click', this.startGame.bind(this));
        this.updateStats();
        this.clearUI();
    }

    //MÄNGU ALUSTAMINE
    startGame(): void {
        if (this.isGameActive) {
            alert("Mäng juba käib!");
            return;
        }

        let betStr = prompt(`Sisesta panus:`, '100');
        let bet = betStr ? parseInt(betStr, 10) : NaN;

        if (isNaN(bet) || bet <= 0 || bet > this.player.balance) {
            alert('Vale panuse väärtus.');
            return;
        }

        if (!this.player.placeBet(bet)) {
            alert('Panus ei sobi.');
            return;
        }

        this.deck = new Deck();

        this.player.resetHand();
        this.dealer.resetHand();

        // Deal cards (2 each)
        this.player.hand.addCard(this.deck.drawOne());
        this.dealer.hand.addCard(this.deck.drawOne());
        this.player.hand.addCard(this.deck.drawOne());
        this.dealer.hand.addCard(this.deck.drawOne());

        this.isPlayerTurn = true;
        this.isGameActive = true;

        this.updateUI();
        this.updateStats();
        this.showPlayerActions();

        // Check blackjack immediately
        if (this.player.hand.isBlackjack()) {
            this.isPlayerTurn = false;
            this.endRound();
        }
    }

    showPlayerActions(): void {
        const container = this.uiElements.playerContainer;
        container.innerHTML = '';

        this.hitButton = document.createElement('button');
        this.hitButton.textContent = 'Hit';
        this.hitButton.addEventListener('click', this.playerHit.bind(this));
        container.appendChild(this.hitButton);

        this.standButton = document.createElement('button');
        this.standButton.textContent = 'Stand';
        this.standButton.addEventListener('click', this.playerStand.bind(this));
        container.appendChild(this.standButton);
    }

    hidePlayerActions(): void {
        const container = this.uiElements.playerContainer;
        container.innerHTML = '';
        this.hitButton = null;
        this.standButton = null;
    }

    playerHit(): void {
        if (!this.isPlayerTurn) return;

        this.player.hand.addCard(this.deck.drawOne());
        this.updateUI();

        if (this.player.hand.isBust()) {
            this.isPlayerTurn = false;
            this.endRound();
        }
    }

    playerStand(): void {
        if (!this.isPlayerTurn) return;

        this.isPlayerTurn = false;

        this.dealerTurn();
    }

    dealerTurn(): void {
        this.updateUI(true); // Show dealer full hand

        while (this.dealer.hand.getValues() < 17) {
            this.dealer.hand.addCard(this.deck.drawOne());
            this.updateUI(true);
        }

        this.endRound();
    }

    endRound(): void {
        this.hidePlayerActions();

        const playerValue = this.player.hand.getValues();
        const dealerValue = this.dealer.hand.getValues();

        let message = '';

        if (this.player.hand.isBust()) {
            message = 'Sa kaotasid! Sa läksid üle 21.';
            this.player.lose();
        } else if (this.dealer.hand.isBust()) {
            message = 'Diiler läks üle 21, sa võidad!';
            this.player.win(2);
        } else if (this.player.hand.isBlackjack() && !this.dealer.hand.isBlackjack()) {
            message = 'Blackjack! Sa võidad 1.5x panuse.';
            this.player.win(2.5);
        } else if (!this.player.hand.isBlackjack() && this.dealer.hand.isBlackjack()) {
            message = 'Diileril on blackjack, sa kaotad!';
            this.player.lose();
        } else if (playerValue > dealerValue) {
            message = `Sa võidad! Sinu ${playerValue} > Diileri ${dealerValue}`;
            this.player.win(2);
        } else if (playerValue < dealerValue) {
            message = `Sa kaotasid! Sinu ${playerValue} < Diileri ${dealerValue}`;
            this.player.lose();
        } else {
            message = `Viik! Mõlemad ${playerValue}. Panus tagastatud.`;
            this.player.push();
        }

        this.isGameActive = false;
        this.updateStats();
        this.updateUI(true, message);
    }

    updateUI(showDealerCards: boolean = false, message = ''): void {
        // Dealer cards display
        if (showDealerCards) {
            this.uiElements.dealerCardsDiv.textContent = this.dealer.hand.toString();
            this.uiElements.dealerDealsSpan.textContent = message;
        } else {
            if (this.dealer.hand.cards.length > 0) {
                const firstCard = this.dealer.hand.cards[0].toString();
                this.uiElements.dealerCardsDiv.textContent = `${firstCard} [??]`;
                if (this.isPlayerTurn){
                    const visibleValue = this.dealer.hand.cards[0].getValue();
                    this.uiElements.dealerDealsSpan.textContent = `Diiler: ${visibleValue}`;
                } else {
                    this.uiElements.dealerDealsSpan.textContent = `Diiler: ${this.dealer.hand.getValues()}`;
                }
                
            } else {
                this.uiElements.dealerCardsDiv.textContent = '';
                this.uiElements.dealerDealsSpan.textContent = 'Diiler: x';
            }
        }

        // Player cards
        this.uiElements.playerCardsDiv.textContent = this.player.hand.toString();
        this.uiElements.playerCardsDiv.title = `Väärtus: ${this.player.hand.getValues()}`;
    }

    updateStats(): void {
        this.uiElements.userBalanceSpan.textContent = `Kontoseis: ${this.player.balance} €`;
        this.uiElements.userWinsSpan.textContent = `Võidud: ${this.player.wins}`;
        this.uiElements.userLossesSpan.textContent = `Kaotused: ${this.player.losses}`;
    }

    clearUI(): void {
        this.uiElements.dealerCardsDiv.textContent = "Siin näidatakse diileri kaarte";
        this.uiElements.playerCardsDiv.textContent = "Siin näidatakse mängija kaarte";
        this.uiElements.dealerDealsSpan.textContent = 'Dealer: x';
        this.hidePlayerActions();
    }
}

//init instance
window.onload = function(){
    new BlackjackGame();
}