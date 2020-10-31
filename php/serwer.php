<?php
session_start();
require("parametry.php");
//$_SESSION['cap']
try{
    $dbh = new PDO($host, $user, $passwd);
    switch($_POST['akcja'])
    {
        case "select":
            $sth = $dbh->prepare("SELECT * FROM monety");
            $sth->execute();
            $result = $sth->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($result);
            break;
        case "insert":
        if($_SESSION['cap']==$_POST['captcha'])
        {
            $sth = $dbh->prepare("INSERT INTO monety (flaga,nominal,kat,stop,rok) VALUES (:f,:n,:k,:s,:r)");
            $sth->bindParam(':f', $_POST['flaga'], PDO::PARAM_STR);
            $sth->bindParam(':n', $_POST['nominal'], PDO::PARAM_STR);
            $sth->bindParam(':k', $_POST['kat'], PDO::PARAM_STR);
            $sth->bindParam(':s', $_POST['stop'], PDO::PARAM_STR);
            $sth->bindParam(':r', $_POST['rok'], PDO::PARAM_INT);
            $sth->execute();
        }
            break;
        case "update":
        if($_SESSION['cap']==$_POST['captcha'])
        {
            $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $sth = $dbh->prepare("UPDATE monety SET flaga=:f,nominal=:n,kat=:k,stop=:s,rok=:r WHERE id=:id");
            $sth->bindParam(':f', $_POST['flaga'], PDO::PARAM_STR);
            $sth->bindParam(':n', $_POST['nominal'], PDO::PARAM_STR);
            $sth->bindParam(':k', $_POST['kat'], PDO::PARAM_STR);
            $sth->bindParam(':s', $_POST['stop'], PDO::PARAM_STR);
            $sth->bindParam(':r', $_POST['rok'], PDO::PARAM_INT);
            $sth->bindParam(':id', $_POST['id'], PDO::PARAM_INT);
            $sth->execute();
        }
            break;
        case "delete":
        if($_SESSION['cap']==$_POST['captcha'])
        {
            $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            //$id = $_POST['id'];
            $sth = $dbh->prepare("DELETE FROM monety WHERE id=:id");
            $sth->bindParam(':id', $_POST['id'], PDO::PARAM_INT);
            $sth->execute();
        }
            break;
    }
}
catch (PDOException $e) {
    echo 'Connection failed: ' . $e->getMessage();
}


?>