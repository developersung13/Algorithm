#include <iostream>
using namespace std;

int n;

int main(int argc, const char* argv[]) {
	ios_base::sync_with_stdio(false);
	cin.tie(0);
	
	cin >> n;
	for(int k=0; k < n; k++) {
		for(int z=0; z < k; z++) cout << ' ';
		for(int z=0; z < n-k; z++) cout << '*';
		cout << '\n';
	} return 0;
}