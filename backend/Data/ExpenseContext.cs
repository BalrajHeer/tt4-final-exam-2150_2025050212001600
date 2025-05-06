using Microsoft.EntityFrameworkCore;
using backend.Models;

namespace backend.Data
{
    public class ExpenseContext : DbContext
    {
        public ExpenseContext(DbContextOptions<ExpenseContext> options) : base(options) { }
        
        public DbSet<Expense> Expenses { get; set; }
    }
}