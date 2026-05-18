import java.sql.*;

public class Delete_conexionJDBC {

    public static void main(String[] args) {

        String usuario = "root";
        String password = "";
        String url = "jdbc:mysql://localhost:3306/novacam";

        try {

            Class.forName("com.mysql.cj.jdbc.Driver");

            Connection conexion = DriverManager.getConnection(url, usuario, password);

            Statement sentencia = conexion.createStatement();

            // DELETE usuario 1
            String delete1 = "DELETE FROM usuario WHERE id_usuario = 6";

            // DELETE usuario 2
            String delete2 = "DELETE FROM usuario WHERE id_usuario = 7";

            // DELETE usuario 3
            String delete3 = "DELETE FROM usuario WHERE id_usuario = 8";

            sentencia.executeUpdate(delete1);
            sentencia.executeUpdate(delete2);
            sentencia.executeUpdate(delete3);

            System.out.println("3 usuarios eliminados correctamente");

        } catch (Exception e) {

            System.out.println("Error: " + e);

        }

    }
}