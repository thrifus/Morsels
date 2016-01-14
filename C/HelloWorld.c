#include <stdio.h>

#define R "\x1B[0m"
#define Y "\x1B[33m"
#define M "\x1B[35m"
#define G "\x1B[32m"
#define B "\x1B[34m"

int main() {
    printf(Y "\n    Hello" M ", " G "World" B "!\n\n" R);
    return 0;
}
