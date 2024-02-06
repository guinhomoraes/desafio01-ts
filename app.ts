import { DioAccount } from './class/DioAccount'

const peopleAccount: DioAccount = new DioAccount('Nath', 101515150)
peopleAccount.deposit(100)
peopleAccount.getBalance()
peopleAccount.withdraw(200)
peopleAccount.getBalance()
peopleAccount.deposit(400)
peopleAccount.getBalance()
peopleAccount.withdraw(200)
peopleAccount.getBalance()
peopleAccount.emprestar(800)
peopleAccount.getBalance()