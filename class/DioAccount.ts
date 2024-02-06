export class DioAccount {
  private name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (valor:number): void => {
    if(this.validateStatus())
    {
      this.balance+=valor
      console.log(`Voce depositou ${valor} reais`)
    }
  }

  withdraw = (valor:number): void => 
  {
    if(this.validateStatus() && this.validateSaldo(valor))
    {
      this.balance-=valor
      console.log(`Voce sacou ${valor} reais`)
    }
    else
    {
      console.log('Saldo insuficiente')
    }
  }

  emprestar = (valor:number): void => 
  {
    if(this.validateStatus())
    {
      this.balance+=valor
      console.log(`Voce emprestou ${valor} reais`)
    }
  }

  getBalance = (): void => {
    console.log(`\nNome: ${this.name} \nConta: ${this.accountNumber} \nSaldo: R$ ${this.balance} reais\n`)
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }

  private validateSaldo = (valorRemover: number): boolean => 
  {
    if (this.balance < valorRemover) 
    {
      return false
    }
    else
    {
      return true
    }
  }
}
