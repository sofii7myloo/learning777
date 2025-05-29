#include <iostream> // áèáëèîòåêà cin cout
#include <cmath> // áèáëèîòåêà ìàòåìàòè÷åñêèõ îïåðàöèé
using namespace std; // ïðîñòðàíñòâî èì¸í std

int main()
{
	setlocale(LC_ALL, "Russian"); // Русский язык

//	double a; // let a int double string
//	double b; // âûõîäíûå äàííûå
//
//	cout << "Введите a\n";
//	cin >> a;
//
//	cout << a << endl;
//
//	b = sqrt(a) + 5;
//
//	cout << b << endl;
	double x;
	double y;
	double t;
	cin >> x; 
	cin >> y;
	cout << "результат: ";
	t = cos(3.14 / 7) * (pow(sin(x - 8 * y), 2) / 2.7 * (x - 3.14));
	cout << t;
}
