using System;
using static System.Math;


namespace vtoraya_rabota
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Введите x:");
            double x = double.Parse(Console.ReadLine());

            Console.WriteLine("Введите y:");
            double y = double.Parse(Console.ReadLine());

            Console.WriteLine("Введите c:");
            double c = double.Parse(Console.ReadLine());

            Console.WriteLine("Введите d:");
            double d = double.Parse(Console.ReadLine());

            double e = 0;


            if (x * y > 3) 
            {
                e = Math.Max(Math.Pow(x, 3), Math.Pow(Math.Log10(x * y), c * d));
            }
            else if (0 <= x * y && x * y <= 3)
            { 
                e = 3 * Math.Min(x, Math.Min(y, Math.Max(c * x, d * y)));
            }
            else if (x * y < 0)
            { 
                e = Math.Pow(2, c * d) - x;
            }

            Console.WriteLine($"Результат: e= {e}");
        }
    }
}