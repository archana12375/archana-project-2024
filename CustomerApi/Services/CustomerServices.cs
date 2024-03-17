using CustomerApi.Models;
using Newtonsoft.Json;
using System.Data;

namespace CustomerApi.Services
{
    public class CustomerServices
    {
        private static DBService db = new DBService();
        public customer FetchCustomerData()
        {
            customer customer = new customer();
            string StrQuery = "Select * from CustomerMaster";
            DataSet ds = db.DoQuery(StrQuery);

            if (ds.Tables[0].Rows.Count>0)
            {
                customer.Details=(from DataRow dr in ds.Tables[0].Rows
                                 select new CustomerDetails()
                                 {
                                     CustomerCode=Convert.ToInt32(dr["CustomerCode"].ToString()),
                                     Name=dr["Name"].ToString(),
                                     Address=dr["Address"].ToString(),
                                     Email=dr["Email"].ToString(),
                                     MobileNo=dr["MobileNo"].ToString(),
                                     GeoLocation=dr["GeoLocation"].ToString(),
                                 }).ToList();
            }


            return customer;
        }
        public customer FetchCustomerDataById(int customerid)
        {
            customer customer = new customer();
            string StrQuery = $"Select * from CustomerMaster where CustomerCode={customerid}";
            DataSet ds = db.DoQuery(StrQuery);

            if (ds.Tables[0].Rows.Count>0)
            {
                customer.Details=(from DataRow dr in ds.Tables[0].Rows
                                  select new CustomerDetails()
                                  {
                                      CustomerCode=Convert.ToInt32(dr["CustomerCode"].ToString()),
                                      Name=dr["Name"].ToString(),
                                      Address=dr["Address"].ToString(),
                                      Email=dr["Email"].ToString(),
                                      MobileNo=dr["MobileNo"].ToString(),
                                      GeoLocation=dr["GeoLocation"].ToString(),
                                  }).ToList();
            }


            return customer;
        }
        public customer UpdateCustomerDetails(CustomerDetails CustomerData)
        {
            customer customer = new customer();
            string StrQuery = $"update CustomerMaster set Name='{CustomerData.Name}',Address='{CustomerData.Address}',Email='{CustomerData.Email}',MobileNo='{CustomerData.MobileNo}',GeoLocation='{CustomerData.GeoLocation}' where CustomerCode={CustomerData.CustomerCode}";
            db.DoQuery(StrQuery);            
            customer=FetchCustomerData();
            return customer;
        }
        public customer DeleteCustomerDataById(int customerid)
        {
            customer customer = new customer();
            string StrQuery = $"Delete from CustomerMaster where CustomerCode={customerid}";
            db.DoQuery(StrQuery);
            customer=FetchCustomerData();
            return customer;
        }
        public string addNewCustomer(CustomerDetails CustomerData)
        {
            string status = "";
            string StrQuery = $"INSERT INTO CustomerMaster (Name, Address, Email, MobileNo, GeoLocation) VALUES('{CustomerData.Name}','{CustomerData.Address}','{CustomerData.Email}','{CustomerData.MobileNo}','{CustomerData.GeoLocation}')";
            
            try
            {
                db.DoQuery(StrQuery);
                status="Customer added successfully";
            }
            catch (Exception ex)
            {
                status="Error adding customer:',"+ex.Message;
            }
            return status;
        }
    }
}
