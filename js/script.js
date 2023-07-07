/*

    If you're referring to using JavaScript reserved words or predefined names as variable names, 
    it's generally not recommended.

    To avoid conflicts and potential errors, it's best to choose variable names that are not reserved words or predefined names in JavaScript. 
    You can use descriptive names that clearly represent the purpose or value of the variable.
    It's common practice to use camelCase naming convention for variables.

    You cannot use these reserved words as variable names.

    abstract        else
    boolean         enum
    break           export
    byte            extends
    case            false
    catch           final
    char            finally
    class           float
    const           for
    continue        function
    debugger        goto
    default         if
    delete          implements
    do              import
    double          in

    instanceof
    int
    interface
    long
    native
    new
    null
    package
    private
    protected
    public
    return
    short
    static
    super

    switch
    synchronized
    this
    throw
    throws
    transient
    true
    try
    typeof
    var
    var
    void
    volatile
    while
    with

    In JavaScript, variables can be created using the var, let, or const keywords.
    Here's a breakdown of the different variable types in JavaScript

    Var ----
    The var keyword was traditionally used to declare variables in JavaScript.
    Variables declared with var are function-scoped or globally-scoped, depending on where they are declared.
    They are also hoisted to the top of their scope, meaning you can access them before they are declared.

    var x = 10;

    Let ----
    The let keyword was introduced in ECMAScript 6 (ES6) and provides block-scoping for variables.
    Variables declared with let are limited to the block (enclosed by curly braces) in which they are defined.
    They are not hoisted to the top of their scope.

    let y = 20;

    Const ----
    The const keyword is also introduced in ES6 and is used to declare constants.
    Constants, as the name suggests, have a value that cannot be reassigned or redeclare.
    They are block-scoped like variables declared with let.

    const z = 30;

*/

/*
    JS display possibilities ------------------------------------------------------------ 


    Inner Html
    To access an Html element, JavaScript can use the document.getElementById(id) method. The id attribute defines the Html element. The innerHTML property defines the Html content.

    document.getElementById("content").innerHTML = 5 + 5;


    Document Write
    For testing purposes, it is convenient to use document.write()

    document.write("Html content from JS");


    Window Alert
    You can use an alert box to display data.

    window.alert("I'm aruna");
    alert("This window keyword is optional, and you can use alert skipping the window keyword");


    Console Log
    For debugging purposes, you can call the console.log() method in the browser to display data.

    console.log(40 + 20);


    JS Print
    JavaScript does not have any print object or print methods. You cannot access output devices from JavaScript. 
    The only exception is that you can call the window.print() method in the browser to print the content of the current window.
*/

/*
    JS Syntax ---------------------------------------------------------------------------
    JavaScript syntax is the set of rules, how JavaScript programs are constructed.

    How to create variables 

    var a;
    let b;

    Always declare a variable with const when you know that the value should not be changed.
    Incorrect - cost PI;
    Correct   - cost PI = 3.14;

    How to use variables

    var a = 5;
    let b = 10;    let c = a + b;

    JS Values
    The JavaScript syntax defines two types of values

    1. Fixed values
       Fixed values are called Literals

    2. Variable values
       Variable values are called Variables.

    JS Literals

    1. Numbers are written with or without decimals: document.getElementById("demo").innerHTML = 10.50;

    2. Strings are text, written within double or single quotes: document.getElementById("demo").innerHTML = 'John Doe';

    JS Variables

    In a programming language, variables are used to store data values. JavaScript uses the keywords var, let and const to declare variables.
    An equal sign is used to assign values to variables. 

    let number;
    number = 10;

    JS Operators

    1. JS uses arithmetic operators ( + - * / ) to compute values
    2. JS uses an assignment operator ( = ) to assign values to variables

    JavaScript Expressions 
    An expression is a combination of values, variables, and operators, which computes to a value. The computation is called an evaluation.
    For example (5 * 10) evaluates to 50

    Expression can also contain variable values
    let c = 10;    
    let b = c * 10;

    The value can be of various types, such as numbers and strings
    For example
    (" John " + " " + " Doe ") evaluates to "John Doe"

    JavaScript Keywords ( JavaScript keywords are used to identify actions to be performed.)

    For example 
    let number_one, number_two;
    number_one = 5 + 10;    number_two = 20 + 5;

    JavaScript Identifiers / Names
    Identifiers are JavaScript names. Identifiers are used to name variables and keywords, and functions.
    The rules for legal names are the same in most programming languages.

    A JavaScript name must begin with

    1. A simple or capital letter
    2. A dollar sign
    3. Or and underscore

    Numbers are not allowed as the first character in names.

    JavaScript is Case Sensitive
    Every JS identifiers are case sensitive. The variables lastName and lastname, are two different variables

    JS and Camel Case
    Historically, programmers have used different ways of joining multiple words into one variable name

    Hyphens (Hyphens are not allowed in JavaScript. They are reserved for subtractions)
    first-name, last-name, master-card, inter-city

    Underscore
    first_name, last_name, master_card, inter_city

    Upper Camel Case (Pascal Case)
    FirstName, LastName, MasterCard, InterCity

    Lower Camel Case (JavaScript programmers tend to use camel case that starts with a lowercase letter)
    firstName, lastName, masterCard, interCity

*/