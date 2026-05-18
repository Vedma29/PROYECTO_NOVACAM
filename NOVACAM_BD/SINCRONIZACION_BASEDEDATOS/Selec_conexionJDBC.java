import java.sql.*;

public class Selec_conexionJDBC {

    public static void main(String[] args) {

        String usuario = "root";
        String password = "";
        String url = "jdbc:mysql://localhost:3306/novacam";

        try {

            Class.forName("com.mysql.cj.jdbc.Driver");

            Connection conexion = DriverManager.getConnection(url, usuario, password);

            Statement sentencia = conexion.createStatement();
                 
           
        //SELECCION DE LOS USUARIOS INSERTADOS PARA VERIFICAR QUE SE HAYAN AGREGADO CORRECTAMENTE

        String sql4 = "SELECT * FROM usuario";
        ResultSet resultado = sentencia.executeQuery(sql4);

        while (resultado.next()) {
            System.out.println("Usuario: " + resultado.getString("seudonimo") + ", Email: " + resultado.getString("email") + ", Password: " + resultado.getString("password"));
        }

    } catch (Exception e) {
        System.out.println("Error: " + e);
    }
}
        }

    
