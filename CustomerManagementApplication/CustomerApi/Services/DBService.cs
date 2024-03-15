using System.Data;
using System.Data.SqlClient;

namespace CustomerApi.Services
{
    public class DBService
    {
        public string conStr { get; set; }

        public DBService()
        {
            this.conStr = @"Server=KICHU\SQLEXPRESS;Database=CustomerDB;Integrated Security=true";

        }
        public DataSet DoQuery(string query)
        {
            DataSet ds = new DataSet();
            if (ValidateSqlQuery(query))
            {
                using (SqlConnection con = new SqlConnection(conStr))
                using (SqlCommand command = new SqlCommand(query, con))
                using (SqlDataAdapter adapter = new SqlDataAdapter(command))
                {
                    try
                    {
                        con.Open();
                        adapter.Fill(ds);
                    }
                    catch (Exception ex)
                    {
                        
                        Console.WriteLine("Database error: " + ex.Message);
                        throw; 
                    }
                    finally
                    {
                        if (con.State != ConnectionState.Closed)
                            con.Close();
                    }
                }
            }
            return ds;
        }
        #region SQL INJECTION CHECKING
        public bool ValidateSqlQuery(string str)
        {
            String inj_str = "create|drop|delete|truncate|declare";
            String[] inj_Arr = inj_str.Split("|");
            bool IsValid = true;
            for (int i = 0; i < inj_Arr.Length; i++)
            {
                if (str.IndexOf(inj_Arr[i]) >= 0)
                {
                    IsValid = false;
                    break;
                }
            }
            return IsValid;
        }
        #endregion
    }
}
