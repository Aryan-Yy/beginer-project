#include <iostream>
using namespace std;

int main() {
    int a, b;

    // Input two numbers
    cout << "Enter first number: ";
    cin >> a;
    cout << "Enter second number: ";
    cin >> b;

    // Arithmetic operations
    cout << "\n--- Arithmetic Operations ---" << endl;
    cout << "Addition (a + b)       = " << (a + b) << endl;
    cout << "Subtraction (a - b)    = " << (a - b) << endl;
    cout << "Multiplication (a * b) = " << (a * b) << endl;

    // Division check (avoid division by zero)
    if (b != 0) {
        cout << "Division (a / b)       = " << (a / b) << endl;
        cout << "Modulus (a % b)        = " << (a % b) << endl;
    } else {
        cout << "Division and Modulus cannot be performed (b = 0)" << endl;
    }

    return 0;
}