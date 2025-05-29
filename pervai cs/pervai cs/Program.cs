using System;

namespace pervai_cs { 
class Program {
        static void Main(string[] args) {
            //Console.WriteLine("fgdg");
            double x= Convert.ToDouble(Console.ReadLine());
            double y= Convert.ToDouble(Console.ReadLine());
            double t;
            
            t = Math.Cos(3.14 / 7) * (Math.Pow(Math.Sin(x - 8 * y), 2) / (2.7 * (x - 3.14)));
            Console.WriteLine(t);

        }
   }
}

