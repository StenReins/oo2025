class Calculator{

    private panelContent: string='';

    pressButton(b:string):void{
        this.panelContent += b
    }

    getPanelContents():string{
        return this.panelContent;
    }
}

export{
    Calculator
};