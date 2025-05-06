import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../../services/expense.service';
import { Expense } from '../../models/expense';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  //styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent implements OnInit {
  expenses: Expense[] = [];

  constructor(private expenseService: ExpenseService) { }

  ngOnInit(): void {
    this.loadExpenses();
  }

  loadExpenses(): void {
    this.expenseService.getExpenses().subscribe(
      expenses => this.expenses = expenses,
      error => console.error('Error loading expenses', error)
    );
  }

  deleteExpense(id: number): void {
    this.expenseService.deleteExpense(id).subscribe(
      () => this.loadExpenses(),
      error => console.error('Error deleting expense', error)
    );
  }
}