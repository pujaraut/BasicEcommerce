﻿using DutchTreat.Data;
using DutchTreat.Services;
using DutchTreat.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DutchTreat.Controllers
{
    public class AppController:Controller
    {
        private readonly IMailService _mailService;
        private readonly IDutchRepository _repository;
        

        public AppController(IMailService mailService, IDutchRepository repository)
        {
            _mailService = mailService;
            _repository = repository;
            
        }

        public IActionResult Index()
        {
            //var result = _repository.GetAllProducts();
             return View();
        }

        [HttpGet("contact")] 
        public IActionResult Contact()
        {
            return View();
        }

        [HttpPost("contact")]
        public IActionResult Contact(ContactViewModel model)
        {
            if (ModelState.IsValid)
            {
                // Send the email
                _mailService.SendMessage("six.puja@gmail.com", model.Subject, $"From: {model.Name} - {model.Email}, Message: {model.Message}");
                ViewBag.UserMessage = "Mail Sent";
                ModelState.Clear();
            }
            else
            {
                // Show the errors
            }

            return View();

        }

        public IActionResult About()
        {
            ViewBag.Title = "About Us";
            return View();
        }

        
        public IActionResult Shop()
        {
            var result = _repository.GetAllProducts();

            return View(result);
        }

       

        
    }
}
