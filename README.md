# Backend Learning - Clean Architecture NodeJS API  
![](https://img.shields.io/github/license/leandro-gehlen/BL-clean-architecture-node-api)  


## Credits and References  

[**Rodrigo Branas** ](https://www.youtube.com/c/RodrigoBranas)🚀  
&  
[**Rodrigo Manguinho**](https://www.youtube.com/c/MangoDeveloper/about)🚀  

## About This Repo  

The main resource of this activity is [**this live**](https://www.youtube.com/watch?v=P0gpCCA8ZPs&t=9s) that these brazilian giants devs have made. **Rodrigo Branas** and **Rodrigo Manguinhos**.  

At this repo I´ll be learning how to implement Clean Architecture on a node api project.\
Also, **my main objective isn´t just to know how to do it, but also try to identify what DESIGN PATTERS are being used and which SOLID principle they are implementing to achieve Clean Architecture implamentation.** 🤓  



##  About Clean Architecture  

["Uncle Bob" BLOG](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)  

"By separating the software into layers, and conforming to **The Dependency Rule**, you will create a system that is intrinsically **testable**, with all the benefits that implies. When any of the external parts of the system become obsolete, like the database, or the web framework, **you can replace** those **obsolete elements with a minimum of fuss**."  

### Characteristics  
+ "The Dependency Rule"
+ Layers & Boundaries
+ Interfaces
+ Abstract Classes
+ Concrete Classes
+ Entities
+ Use Case Layer
+ Domain Layer
+ Infra Layer  

![CleanArchitecture](https://user-images.githubusercontent.com/114420790/199520508-31a35042-e152-4a17-abad-2a91e5722790.jpg)  
 

## **SOLID Principles**  //  [**Ref - www.freecodecamp.com**](https://www.freecodecamp.org/news/solid-principles-explained-in-plain-english/)

+ **S** =>  The Single Responsibility Principle
+ **O** =>  The Open-Closed Principle
+ **L** =>  The Liskov Substitution Principle
+ **I** =>  The Interface Segregation Principle
+ **D** =>  The Dependency Inversion Principle  

## **The Single Responsibility Principle**  
  
The Single Responsibility Principle states that **a class should do one thing and therefore it should have only a single reason to change.**  

**Trick**   


  + **If you ask yourself what your class does and the answer is something AND/OR oneother thing, chances are that the class doesn’t adhere to the Single responsibility principle.**  

Robert C. Martin(Uncle Bob) says:

"Gather together the things that change for the same reasons. Separate those things that change for different reasons."  
So, it´s nice to check if you are not disrespecting the Single Responsability Principle.

## The Open-Closed Principle  
  
The Open-Closed Principle requires that classes should be open for extension and closed to modification.

Modification means changing the code of an existing class, and extension means adding new functionality.

**Open for Extension:**  
  + adding new functionality(create or change methods ON INSTANCES/OBJECTS)   



**Closed for Modification:**
  +  changing the code of existing class(make changes ON CLASSES) 


The main question is...**how do we do it?!**

There are some **DESIGN PATTERS** that makes it possible to code respecting the **Open-Closed Principle.**

+ **Composite**    
+ **Decorator**  
+ **Proxy**  
+ **Strategy**  



Everything is chained on Clean Architecture.
You will use design patterns to achieve SOLID principles implementation while implements clean architecture.
That´s why create a good quality code isn´t easy.You must master all those concepts and learn how to implement them!

I will ve talking about the **Gang of Four** and their **22 Design Patterns** after SOLID principles.  


**IMPORTANT** 

Do not use inherance on your code. That´s possible and I´m sure some one told you that it´s a bennefit from OOP.
You can extends the class and create new personalized objects, with polimorphism by changing also their behavier(methods) and implementing new ones.
Ok...**that´s not you should do from now on!**

------------
>
>**What should I do?!**  
>
>If you need to extend a class, that´s fine. But you should not extend concrete classes. That means you should create an abstract class or you should create an   >interface to be implemented by those concrete classes that you need to create.
>That´s important because you´ll be also respecting the DEPENDENCY INVERSION PRINCIPLE from soli**D**.
>Also, you will not be chaining the classes together, and that independency is amazing.
>
>Use interfaces insted of extend the parent class. Just create an interface, a contract with the parent class especifications.
>
---------










