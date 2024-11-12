<?php
// Simulated dynamic data
$topics = [
    ['id' => 'data', 'name' => 'Data'],
    ['id' => 'anydask', 'name' => 'Anydask'],
    ['id' => 'inquiry', 'name' => 'Inquiry'],
    ['id' => 'damo', 'name' => 'Damo'],
    ['id' => 'visit', 'name' => 'Visit']
];
?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Untitled Document</title>

    <style>
        body {

            font-family: Arial, sans-serif;
        }

        .header {
            width: 100%;
            height: 50px;
            background-color: blue;
            border: 1px solid blue;
        }

        .menu {
            display: flex;                /* Use flexbox for the container */
            justify-content: space-between; /* Space out children evenly */
            align-items: center;          /* Center items vertically */
            padding: 10px;                /* Add some padding */
            background-color: blue;    /* Optional: background color for visibility */
        }
        .menu ul {
            list-style: none; /* Remove default list styling */
            padding: 0;       /* Remove default padding */
            margin: 0;        /* Remove default margin */
            display: flex;    /* Flexbox for horizontal alignment */
            flex: 1;          /* Flex-grow so ul takes full width */
            justify-content: space-between; /* Space out children within ul */
        }
        .menu li {
            margin: 0 10px; /* Space between menu items */
        }
        .menu li:nth-child(2) {
            background-color: blue; /* Special background for the Dashboard item */
        }
        .menu li a {
            text-decoration: none; /* Remove underline */
            color: white; /* Text color */
        }
        .menu li a:hover {
            text-decoration: underline; /* Underline on hover */
        }


        .container {
            width: 100%;
            height: 550px;



        }

        .sidebar {
            width: 15%;
            height: 550px;
            border: 1px solid blue;
            background-color: blue;
            float: left;
            padding-left: 2px;
            margin-right: 0px;
            z-index: 1;
            top: 0;
            left: 0;




        }

        .sidebar ul {
            list-style: none;
            padding: 12px;       /* Remove default padding */
            margin: 2px;        /* Remove default margin */
                    /* Flex-grow so ul takes full width */
        }

        .sidebar ul li {

            color: white;

            display: block;
        }

        .icon {
            margin-right: 10px;
            /* Adjust this value as needed */
        }

        .content1 {
            width: 120px;
            height: 100px;
            border: 1px solid rgb(34, 183, 232);
            float: left;
            margin-top: 50px;
            margin-left: 50px;
            text-align: center;
            color: rgb(34, 183, 232);

        }

        .content2 {
            width: 120px;
            height: 100px;
            border: 1px solid rgb(34, 183, 232);
            float: left;
            margin-top: 50px;
            margin-left: 50px;
            text-align: center;
            color: rgb(34, 183, 232);
        }

        .content3 {
            width: 120px;
            height: 100px;
            border: 1px solid rgb(34, 183, 232);
            float: left;
            margin-top: 50px;
            text-align: center;
            margin-left: 50px;
            color: rgb(34, 183, 232);
        }

        .content4 {
            width: 120px;
            height: 100px;
            border: 1px solid rgb(34, 183, 232);
            float: left;
            margin-top: 50px;
            margin-left: 50px;
            text-align: center;
            color: rgb(34, 183, 232);
        }

        .content5 {
            width: 120px;
            height: 100px;
            border: 1px solid rgb(34, 183, 232);
            float: left;
            margin-top: 50px;
            margin-left: 50px;
            text-align: center;
            color: rgb(34, 183, 232);
        }

        .content6 {
            width: 120px;
            height: 100px;
            border: 1px solid rgb(34, 183, 232);
            float: left;
            margin-top: 50px;
            margin-left: 50px;
            text-align: center;
            color: rgb(34, 183, 232);
        }

        /*.category {
            width: 160px;
            height: 220px;
            border: 1px solid rgb(34, 183, 232);
            float: left;
            margin-top: 50px;
            margin-left: 50px;
            text-align: center;
            font-size: x-small;
            color: rgb(34, 183, 232);
        }

        .category p b {
            color: rgb(34, 183, 232);
        }

        .category p {
            color: black;
        }*/
        .container {
    max-width: 600px;
    margin: 50px auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
    color: #333;
    text-align: center;
    margin-bottom: 20px;
}

.topic-list {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

.topic-list li {
    position: relative;
    margin: 10px 0;
    padding: 15px;
    background-color: #f9f9f9;
    border-radius: 4px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s, transform 0.3s;
}

.topic-list li:hover {
    background-color: #e2e2e2;
    transform: translateY(-5px);
}

.topic-list a {
    text-decoration: none;
    color: #333;
    display: block;
    width: 100%;
}

.topic-list a:hover {
    color: #007bff;
}

@media (max-width: 600px) {
    .container {
        padding: 10px;
    }
}


        .Department {
            width: 160px;
            height: 220px;
            border: 1px solid rgb(34, 183, 232);
            float: left;
            margin-top: 50px;
            margin-left: 50px;
            text-align: center;
            font-size: x-small;
            color: rgb(34, 183, 232);
        }

        .Department p b {
            color: rgb(34, 183, 232);
        }

        .Department p {
            color: black;
        }

        .Lead {
            width: 160px;
            height: 220px;
            border: 1px solid rgb(34, 183, 232);
            float: left;
            margin-top: 50px;
            margin-left: 50px;
            text-align: center;
            font-size: x-small;
            color: rgb(34, 183, 232);
        }

        .Lead p b {
            color: rgb(34, 183, 232);
        }

        .Lead p {
            color: black;
        }

        .Product {
            width: 160px;
            height: 220px;
            border: 1px solid rgb(34, 183, 232);
            float: left;
            margin-top: 50px;
            margin-left: 50px;
            text-align: center;
            font-size: x-small;
            color: rgb(34, 183, 232);
        }

        .Product p b {
            color: rgb(34, 183, 232);
        }

        .Product p {
            color: black;
        }

        .User {
            width: 160px;
            height: 220px;
            border: 1px solid rgb(34, 183, 232);
            float: left;
            margin-top: 50px;
            margin-left: 50px;
            text-align: center;
            font-size: xx-small;
            color: rgb(34, 183, 232);
        }

        .User p b {
            color: rgb(34, 183, 232);
        }

        .User p {
            color: black;
        }
    </style>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">
</head>

<body>
    <div class="header">
        <div class="menu">
            <ul>
                <li><a href=""><i class="fa-solid fa-bars"></i></a></li>

                <li><a href="">Dashboard</a></li>

                <li><a href=""><i class="fa-solid fa-user icon"></i> Manthan</a></li>
            </ul>
        </div>

    </div>
    <div class="container">

        <div class="sidebar">
            <ul>
                <li><a><i class="fa-solid fa-house-chimney icon"></i> Dashboard</a></li>
            <br>
            <li><a><i class="fa-solid fa-address-book icon"></i> Contacts</a></li>
            <br>
            <li><a><i class="fa-solid fa-user icon"></i> Leads</a></li>
            <br>
            <li><a><i class="fa fa-tasks icon" aria-hidden="true"></i> Tasks</a></li>
            <br>
            <li><a><i class="fa-solid fa-question icon"></i> FAQ</a></li>
            <br>
            <li><a><i class="fa fa-sign-out icon" aria-hidden="true"></i> Logout</a></li>
            </ul>
        </div>
        <div class="content1">
            <h3>279</h3>
            <p>Missed Tasks</p>
        </div>
        <div class="content2">
            <h3>44</h3>
            <p>Today's Tasks</p>
        </div>
        <div class="content3">
            <h3>7364</h3>
            <p>Total Contants</p>
        </div>
        <div class="content4">
            <h3>461</h3>
            <p>Total Leads</p>
        </div>
        <div class="content5">
            <h3>323</h3>
            <p>All Tasks</p>
        </div>
        <div class="content6">
            <h3>0</h3>
            <p>Upcomimg Tasks</p>
        </div>
        <div class="container">
            <h1>Dynamic Topics</h1>
            <ul class="topic-list">
                <?php foreach ($topics as $topic): ?>
                    <li><a href="#<?php echo htmlspecialchars($topic['id']); ?>"><?php echo htmlspecialchars($topic['name']); ?></a></li>
                <?php endforeach; ?>
            </ul>
        </div>
        <div class="Department">
            <p><b>Department ________ count</b></p>
            <p>Setup ________ 13</p>
            <p>Marketing
                _________________ 276</p>
            <p>Support
                __________________ 25</p>
            <p>Account ______________9</p>
        </div>
        <div class="Lead">
            <p><b>Lead Status ________ count</b></p>
            <p>Inquiry __________ 310</p>
            <p>Demo Pen. _________ 22</p>
            <p>Followup Pan. _______ 18</p>
            <p>Setup Pen. ________ 5</p>
            <p>Payment Pan. _______ 16</p>
            <p>Feedback
                Review ________ 61</p>
            <p>Not Interested ________ 16</p>
            <p>X Delete ________ 3</p>
        </div>
        <div class="Product">
            <p><b>Product ________ count</b></p>
            <p>E-commerce ________ 1</p>
            <p>Custom
                mobile
                application_________ 1</p>
            <p>Followup.io _______ 10</p>
            <p>Order
                Managment________ 2</p>
            <p>GDC
                Renewal _______ 1</p>
            <p>personal
                Work ________2 </p>
            <p>Website ________ 5</p>
        </div>
        <div class="User">
            <p><b>User ________ count</b></p>
            <p>Manthan 107
                ____________ </p>
            <p>Laxmikant 2
                Sagar __________ </p>
            <p>Mayur _______ 210</p>
            <p>Krunal Patel 5</p>
            ________________________
        </div>
    </div>

</body>

</html>