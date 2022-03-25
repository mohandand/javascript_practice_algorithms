#include <linux/kernel.h>
#include <sys/syscall.h>
#include <stdio.h>
#include <unistd.h>
#include <string.h>
#include <errno.h>
#include <stdlib.h>

int main(void){
    int i,j;
    printf("Enter the value of i: ");
    scanf("%d",&i);
    printf("Enter the value of j: ");
    scanf("%d",&j);
    printf("\nCalling system call sys_addMO\n");
    int res = syscall(437,i,j);
    printf("Sum of %d and %d is %d\n",i,j,res);
    return 0;
}