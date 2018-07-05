<?php
    $mysqli = mysqli_connect('127.0.0.1','root','root','test');
    $sql = "select * from left";
    $result = $mysqli->query($sql);
    $result.last();
   
    $sql1 = "insert into left "
?>
    
<% 
    String sql1 = "select * from record_copy";
    ResultSet rs = stmt1.executeQuery(sql1);
    rs.last();
    int id = rs.getInt("id") + 1;

    PreparedStatement sql =conn.prepareStatement("insert into record_copy values (?,?,?,?,?,?)");  
    
    String name=request.getParameter("leftName");
    String cont=request.getParameter("leftMain");
   //String time=request.getParameter("leftTime");
    String time="2017-09-15";
    String img=request.getParameter("leftImg");
   
    String users=(String)session.getAttribute("users");
   
    sql.setInt(1,id);
    sql.setString(2,name);
    sql.setString(3,users);
     sql.setString(4,img);
    sql.setString(5,cont);
    sql.setString(6,time);
     
     
    sql.executeUpdate(); 
    flag = 1;
    if(flag == 1){
        response.sendRedirect("main.jsp");
}
    sql.close();
    conn.close();
    
    %>  
</body>  
</html>  