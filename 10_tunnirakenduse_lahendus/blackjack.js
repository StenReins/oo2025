var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var initialName = prompt("Sisesta oma nimi") || "";
//HAND CREATION PORTION
var Card = /** @class */ (function () {
    function Card(suit, cardValue) {
        this.suit = suit;
        this.cardValue = cardValue;
        this.suit = suit;
        this.cardValue = cardValue;
    }
    Card.prototype.getValue = function () {
        if (['J', 'Q', 'K'].includes(this.cardValue)) {
            return 10;
        }
        else if (this.cardValue === 'A') {
            return 11;
        }
        else {
            return parseInt(this.cardValue);
        }
    };
    Card.prototype.toString = function () {
        return "".concat(this.cardValue).concat(this.suit);
    };
    return Card;
}());
var Deck = /** @class */ (function () {
    function Deck() {
        this.suits = ['♠', '♥', '♦', '♣'];
        this.values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        this.allCards = [];
        this.initDeck();
        this.shuffle();
    }
    Deck.prototype.initDeck = function () {
        for (var _i = 0, _a = this.suits; _i < _a.length; _i++) {
            var suit = _a[_i];
            for (var _b = 0, _c = this.values; _b < _c.length; _b++) {
                var value = _c[_b];
                this.allCards.push(new Card(suit, value));
            }
        }
    };
    Deck.prototype.shuffle = function () {
        var _a;
        var allCards = this.allCards;
        for (var i = 0; i < allCards.length - 1; i++) { //shuffle algorithm
            var j = Math.floor(Math.random() * (i + 1));
            _a = [allCards[j], allCards[i]], allCards[i] = _a[0], allCards[j] = _a[1];
        }
    };
    Deck.prototype.drawOne = function () {
        var card = this.allCards.pop();
        if (!card) {
            throw new Error('null');
        }
        return card;
    };
    return Deck;
}());
var Hand = /** @class */ (function () {
    function Hand() {
        this.cards = [];
    }
    Hand.prototype.addCard = function (card) {
        this.cards.push(card);
    };
    Hand.prototype.getValues = function () {
        var total = 0;
        var aces = 0;
        for (var _i = 0, _a = this.cards; _i < _a.length; _i++) {
            var card = _a[_i];
            var val = card.getValue();
            if (val === 11)
                aces++;
            total += val;
        }
        while (total > 21 && aces > 0) {
            total -= 10;
            aces -= 1;
        }
        return total;
    };
    Hand.prototype.isBust = function () {
        return this.getValues() > 21;
    };
    Hand.prototype.isBlackjack = function () {
        return this.cards.length === 2 && this.getValues() === 21;
    };
    Hand.prototype.toString = function () {
        return this.cards.map(function (card) { return card.toString(); }).join(' ');
    };
    return Hand;
}());
//GAME PORTION
var User = /** @class */ (function () {
    function User(name, balance, wins, losses) {
        this.users = JSON.parse(localStorage.getItem('users') || '[]');
        this.name = initialName;
        this.balance = 1000;
        this.wins = 0;
        this.losses = 0;
        if (this.users.includes(this.name)) {
            this.selectUser();
        }
        else {
            this.saveUser();
        }
    }
    User.prototype.saveUser = function () {
        var user = {
            balance: this.balance,
            wins: this.wins,
            losses: this.losses
        };
        localStorage.setItem(this.name, JSON.stringify(user));
    };
    User.prototype.selectUser = function () {
        var userData = JSON.parse(localStorage.getItem(this.name) || '');
        if (userData) {
            this.balance = userData.balance;
            this.wins = userData.wins;
            this.losses = userData.losses;
        }
    };
    return User;
}());
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player(name) {
        var _this = _super.call(this, name) || this;
        _this.hand = new Hand();
        _this.bet = 0;
        return _this;
    }
    Player.prototype.resetHand = function () {
        this.hand = new Hand();
    };
    Player.prototype.placeBet = function (amount) {
        if (amount > this.balance || amount <= 0)
            return false;
        this.bet = amount;
        this.balance -= amount;
        this.saveUser();
        return true;
    };
    Player.prototype.win = function (betMultiplier) {
        // võit
        this.balance += this.bet * betMultiplier;
        this.wins++;
        this.bet = 0;
        this.saveUser();
    };
    Player.prototype.push = function () {
        this.balance += this.bet;
        this.bet = 0;
        this.saveUser();
    };
    Player.prototype.lose = function () {
        this.losses++;
        this.bet = 0;
        this.saveUser();
    };
    return Player;
}(User));
var BlackjackGame = /** @class */ (function () {
    function BlackjackGame() {
        this.isPlayerTurn = false;
        this.isGameActive = false;
        this.hitButton = null;
        this.standButton = null;
        this.uiElements = {
            startBtn: document.querySelector('#startGame'),
            dealerCardsDiv: document.querySelector('.dealerCards'),
            playerCardsDiv: document.querySelector('.playerCards'),
            dealerDealsSpan: document.querySelector('#dealerDeals'),
            playerContainer: document.querySelector('.playerContainer'),
            userBalanceSpan: document.querySelector('#userBalance'),
            userWinsSpan: document.querySelector('#userWins'),
            userLossesSpan: document.querySelector('#userLosses')
        };
        this.deck = new Deck();
        this.player = new Player(initialName);
        this.dealer = new Player('Dealer');
        this.uiElements.startBtn.addEventListener('click', this.startGame.bind(this));
        this.updateStats();
        this.clearUI();
    }
    //MÄNGU ALUSTAMINE
    BlackjackGame.prototype.startGame = function () {
        if (this.isGameActive) {
            alert("Mäng juba käib!");
            return;
        }
        var betStr = prompt("Sisesta panus:", '100');
        var bet = betStr ? parseInt(betStr, 10) : NaN;
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
    };
    BlackjackGame.prototype.showPlayerActions = function () {
        var container = this.uiElements.playerContainer;
        container.innerHTML = '';
        this.hitButton = document.createElement('button');
        this.hitButton.textContent = 'Hit';
        this.hitButton.addEventListener('click', this.playerHit.bind(this));
        container.appendChild(this.hitButton);
        this.standButton = document.createElement('button');
        this.standButton.textContent = 'Stand';
        this.standButton.addEventListener('click', this.playerStand.bind(this));
        container.appendChild(this.standButton);
    };
    BlackjackGame.prototype.hidePlayerActions = function () {
        var container = this.uiElements.playerContainer;
        container.innerHTML = '';
        this.hitButton = null;
        this.standButton = null;
    };
    BlackjackGame.prototype.playerHit = function () {
        if (!this.isPlayerTurn)
            return;
        this.player.hand.addCard(this.deck.drawOne());
        this.updateUI();
        if (this.player.hand.isBust()) {
            this.isPlayerTurn = false;
            this.endRound();
        }
    };
    BlackjackGame.prototype.playerStand = function () {
        if (!this.isPlayerTurn)
            return;
        this.isPlayerTurn = false;
        this.dealerTurn();
    };
    BlackjackGame.prototype.dealerTurn = function () {
        this.updateUI(true); // Show dealer full hand
        while (this.dealer.hand.getValues() < 17) {
            this.dealer.hand.addCard(this.deck.drawOne());
            this.updateUI(true);
        }
        this.endRound();
    };
    BlackjackGame.prototype.endRound = function () {
        this.hidePlayerActions();
        var playerValue = this.player.hand.getValues();
        var dealerValue = this.dealer.hand.getValues();
        var message = '';
        if (this.player.hand.isBust()) {
            message = 'Sa kaotasid! Sa läksid üle 21.';
            this.player.lose();
        }
        else if (this.dealer.hand.isBust()) {
            message = 'Diiler läks üle 21, sa võidad!';
            this.player.win(2);
        }
        else if (this.player.hand.isBlackjack() && !this.dealer.hand.isBlackjack()) {
            message = 'Blackjack! Sa võidad 1.5x panuse.';
            this.player.win(2.5);
        }
        else if (!this.player.hand.isBlackjack() && this.dealer.hand.isBlackjack()) {
            message = 'Diileril on blackjack, sa kaotad!';
            this.player.lose();
        }
        else if (playerValue > dealerValue) {
            message = "Sa v\u00F5idad! Sinu ".concat(playerValue, " > Diileri ").concat(dealerValue);
            this.player.win(2);
        }
        else if (playerValue < dealerValue) {
            message = "Sa kaotasid! Sinu ".concat(playerValue, " < Diileri ").concat(dealerValue);
            this.player.lose();
        }
        else {
            message = "Viik! M\u00F5lemad ".concat(playerValue, ". Panus tagastatud.");
            this.player.push();
        }
        this.isGameActive = false;
        this.updateStats();
        this.updateUI(true, message);
    };
    BlackjackGame.prototype.updateUI = function (showDealerCards, message) {
        if (showDealerCards === void 0) { showDealerCards = false; }
        if (message === void 0) { message = ''; }
        // Dealer cards display
        if (showDealerCards) {
            this.uiElements.dealerCardsDiv.textContent = this.dealer.hand.toString();
            this.uiElements.dealerDealsSpan.textContent = message;
        }
        else {
            if (this.dealer.hand.cards.length > 0) {
                var firstCard = this.dealer.hand.cards[0].toString();
                this.uiElements.dealerCardsDiv.textContent = "".concat(firstCard, " [??]");
                if (this.isPlayerTurn) {
                    var visibleValue = this.dealer.hand.cards[0].getValue();
                    this.uiElements.dealerDealsSpan.textContent = "Diiler: ".concat(visibleValue);
                }
                else {
                    this.uiElements.dealerDealsSpan.textContent = "Diiler: ".concat(this.dealer.hand.getValues());
                }
            }
            else {
                this.uiElements.dealerCardsDiv.textContent = '';
                this.uiElements.dealerDealsSpan.textContent = 'Diiler: x';
            }
        }
        // Player cards
        this.uiElements.playerCardsDiv.textContent = this.player.hand.toString();
        this.uiElements.playerCardsDiv.title = "V\u00E4\u00E4rtus: ".concat(this.player.hand.getValues());
    };
    BlackjackGame.prototype.updateStats = function () {
        this.uiElements.userBalanceSpan.textContent = "Kontoseis: ".concat(this.player.balance, " \u20AC");
        this.uiElements.userWinsSpan.textContent = "V\u00F5idud: ".concat(this.player.wins);
        this.uiElements.userLossesSpan.textContent = "Kaotused: ".concat(this.player.losses);
    };
    BlackjackGame.prototype.clearUI = function () {
        this.uiElements.dealerCardsDiv.textContent = "Siin näidatakse diileri kaarte";
        this.uiElements.playerCardsDiv.textContent = "Siin näidatakse mängija kaarte";
        this.uiElements.dealerDealsSpan.textContent = 'Dealer: x';
        this.hidePlayerActions();
    };
    return BlackjackGame;
}());
//init instance
window.onload = function () {
    new BlackjackGame();
};
