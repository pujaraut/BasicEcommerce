using DutchTreat.Data.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DutchTreat.Data 
{
    public class DutchContext:IdentityDbContext<StoreUser>
    {
        //private readonly IConfiguration _config;
        

        public DutchContext(DbContextOptions<DutchContext> options) : base(options)
        {
           
        }

        public DbSet<Product> Products { get; set; }
        public DbSet<Order> Orders { get; set; }

        //protected override void OnConfiguring(DbContextOptionsBuilder bldr)
        //{
        //    base.OnConfiguring(bldr);
            
        //    bldr.UseSqlServer(_config.GetConnectionString("ConnectionStrings"));
        //}

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Product>()
            .Property(p => p.Price)
            .HasColumnType("money");

            modelBuilder.Entity<OrderItem>()
          .Property(o => o.UnitPrice)
          .HasColumnType("money");

            modelBuilder.Entity<Order>()
                .HasData(new Order()
                {
                    Id=2,
                    OrderDate=DateTime.UtcNow,
                    OrderNumber="12345"
                });

        }
    }
}
