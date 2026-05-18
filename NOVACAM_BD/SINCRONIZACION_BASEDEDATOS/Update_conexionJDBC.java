import java.sql.*;

public class Update_conexionJDBC {

    public static void main(String[] args) {

        String usuario = "root";
        String password = "";
        String url = "jdbc:mysql://localhost:3306/novacam";

        try {

            Class.forName("com.mysql.cj.jdbc.Driver");

            Connection conexion = DriverManager.getConnection(url, usuario, password);

            Statement sentencia = conexion.createStatement();

            // UPDATE usuario 1
            String update1 = "UPDATE usuario " +
                    "SET experiencia = '7 años', equipo_usado = 'Logitech Brio' " +
                    "WHERE id_usuario = 1";

            // UPDATE usuario 2
            String update2 = "UPDATE usuario " +
                    "SET experiencia = '5 años', equipo_usado = 'Sony A6400' " +
                    "WHERE id_usuario = 2";

            // UPDATE usuario 3
            String update3 = "UPDATE usuario " +
                    "SET experiencia = '3 años', equipo_usado = 'RTX Studio Setup' " +
                    "WHERE id_usuario = 3";

            sentencia.executeUpdate(update1);
            sentencia.executeUpdate(update2);
            sentencia.executeUpdate(update3);

            System.out.println("3 usuarios actualizados correctamente");

        } catch (Exception e) {

            System.out.println("Error: " + e);

        }

    }
}