# Python

## Strings

```python
"hello world"
'hello world'
'''hello world'''
"i'm jhon doe"
```

## Basic Operations

__integer division__

```python
from __future__ import division
a = 4
b = 3
print a//b

> 1
```

__mod__

```python
a = 177
b = 10
print divmod(a, b)

> (17, 7)
```

__power__

```python
a = 3
b = 4
m = 5
print pow(a, b)
print pow(a, b, m)

> 81
> 1
```

```python
std = {}
n = int(raw_input())

for i in range(0, n):
  nm, val1, val2, val3 = raw_input().split(' ')
  std[nm] = (float(val1) + float(val2) + float(val3))/3

print("%.2f" % std[raw_input()])
```

## Data Types

__Lists__

```python
myList.append(9)
myList.extend([6,8])
myList.insert(3,7)
myList.remove(9)
myList.pop()
myList.index(9)
myList.count(9)
myList.sort()
myList.reverse()
```
