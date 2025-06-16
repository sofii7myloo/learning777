#include <iostream> // библиотека cin cout
#include <cmath> // математическая библиотека
using namespace std; // пространство имён std

int main()
{
	// Подключение русского языка
	setlocale(LC_ALL, "Russian");

	double a; // 
	double b; // âûõîäíûå äàííûå

	cout << "Введите a\n";
	cin >> a;

	cout << a << endl;

	b = sqrt(a) + 5;

	cout << b << endl;
}
