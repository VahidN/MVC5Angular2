using System;
using System.Collections.Generic;
using System.Text;
using System.Web.Mvc;
using MVC5Angular2.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace MVC5Angular2.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            //return Redirect("~/dist"); //webpack
            return View();
        }

        public ActionResult Products()
        {
            var products = new List<Product>
            {
               new Product
               {
                    ProductId= 2,
                    ProductName= "Garden Cart",
                    ProductCode= "GDN-0023",
                    ReleaseDate= "March 18, 2016",
                    Description= "15 gallon capacity rolling garden cart",
                    Price= (decimal) 32.99,
                    StarRating= 4.2,
                    ImageUrl= "app/assets/images/garden_cart.png"
               },
               new Product
               {
                    ProductId= 5,
                    ProductName= "Hammer",
                    ProductCode= "TBX-0048",
                    ReleaseDate= "May 21, 2016",
                    Description= "Curved claw steel hammer",
                    Price= (decimal) 8.9,
                    StarRating= 4.8,
                    ImageUrl= "app/assets/images/rejon_Hammer.png"
               }
            };

            return new ContentResult
            {
                Content = JsonConvert.SerializeObject(products, new JsonSerializerSettings
                {
                    ContractResolver = new CamelCasePropertyNamesContractResolver()
                }),
                ContentType = "application/json",
                ContentEncoding = Encoding.UTF8
            };
        }

        [HttpPost]
        public ActionResult AddProduct(Product product)
        {
            product.ProductId = 1; //todo: save product and get id from db

            return new ContentResult
            {
                Content = JsonConvert.SerializeObject(product, new JsonSerializerSettings
                {
                    ContractResolver = new CamelCasePropertyNamesContractResolver()
                }),
                ContentType = "application/json",
                ContentEncoding = Encoding.UTF8
            };
        }


        [HttpPost]
        public ActionResult AddUser(User user)
        {
            user.Id = 1; //todo: save user and get id from db

            return new ContentResult
            {
                Content = JsonConvert.SerializeObject(user, new JsonSerializerSettings
                {
                    ContractResolver = new CamelCasePropertyNamesContractResolver()
                }),
                ContentType = "application/json",
                ContentEncoding = Encoding.UTF8
            };
        }


        [HttpPost]
        public ActionResult CheckUser(User user)
        {
            var isUnique = new { result = true };
            if (user.Name?.Equals("Vahid", StringComparison.OrdinalIgnoreCase) ?? false)
            {
                isUnique = new { result = false };
            }

            return new ContentResult
            {
                Content = JsonConvert.SerializeObject(isUnique, new JsonSerializerSettings
                {
                    ContractResolver = new CamelCasePropertyNamesContractResolver()
                }),
                ContentType = "application/json",
                ContentEncoding = Encoding.UTF8
            };
        }
    }
}