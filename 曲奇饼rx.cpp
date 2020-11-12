#include<bits/stdc++.h>
int main(){
	int a[26]={0};
	char c[200000];
	int left=0,right=0;
	int b[26]={0};
	int max=0,i,n;
	gets(c);
	for(i=0;i<=strlen(c)-1;i++)
	{
		n=c[i]-'a';
		a[n]++;
		right++;
		if (a[n]==1)
		{
			if(right-left>max)	max=right-left;
		}
		else 
		{
			a[n]--;
			left=b[n]+1;
		}
		b[n]=i;
	}
	printf("%d",max);
	return 0;
}
