import random

letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
passw = [1]
for i in range(4):
    x = random.randrange(1,25)
    y = random.randrange(0,10)
    word = letters[x]
    passw.append(word)
    passw.append(y)

passw.remove(1)
random.shuffle(passw)
result = "{}{}{}{}{}{}{}{}".format(*passw)
