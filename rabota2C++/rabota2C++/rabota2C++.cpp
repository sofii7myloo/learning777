// rabota2C++.cpp : Этот файл содержит функцию "main". Здесь начинается и заканчивается выполнение программы.
//

#include <iostream>
#include <cmath> // исп для функций 
#include <algorithm>   // исп. для max, min
using namespace std;

int main()
{
	setlocale(LC_ALL, "Russian");

	double x;
	cout << "Введите x:";
	cin >> x;

	double y;
	cout << "Введите y:";
	cin >> y;

	double c;
	cout << "Введите c:"; 
	cin >> c;

	double d;
	cout << "Введите d:";
	cin >> d;
	double e;
	
	if (x * y > 3) {
		e = std:: max(pow(x, 3), pow(log10(x * y), c * d));
	}
	else if (0 <= x * y && x * y <= 3) {
		e = 3 * std::min({ x, y, std::max(c * x, d * y) });
	}
	else if (x * y < 0) {
		e = pow(2, c * d) - x;
	}
	std::cout << "Результат:e=" << e;
}

