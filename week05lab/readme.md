query{
 	welcome
  g1: greet(name : "Pritesh")
	g2: greet(name : "Ali")
  
   u0: user {
  	fnm
    lnm
  }
  
  u1: user {
    ...UserFields
  }
  
  u11: user {
   ...UserFields
  }
  
  u2: user{
    uid
    fnm
    lnm
    salary
  }
  
   u3: user{
    uid
    fnm
    lnm
    salary
  }
}


fragment UserFields on User{
  fnm
  lnm
}
![alt text](image.png)
![alt text](image-1.png)

mutations:
![alt text](image-2.png)

adding user to database through postman:
![alt text](image-3.png)