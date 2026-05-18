import java.sql.*;

public class Insert_conexionJDBC {

    public static void main(String[] args) {

        String usuario = "root";
        String password = "";
        String url = "jdbc:mysql://localhost:3306/novacam";

        try {

            Class.forName("com.mysql.cj.jdbc.Driver");

            Connection conexion = DriverManager.getConnection(url, usuario, password);

            Statement sentencia = conexion.createStatement();

            String sql1 = "INSERT INTO usuario(seudonimo, email, password, experiencia, equipo_usado, fecha_registro) " +
                    "VALUES('NovaGirl', 'nova@gmail.com', '12345', '2 años', 'Logitech C920', '2026-05-17')";

            String sql2 = "INSERT INTO usuario(seudonimo, email, password, experiencia, equipo_usado, fecha_registro) " +
                    "VALUES('RubyCam', 'ruby@gmail.com', '54321', '4 años', 'iPhone 14', '2026-05-17')";

            String sql3 = "INSERT INTO usuario(seudonimo, email, password, experiencia, equipo_usado, fecha_registro) " +
                    "VALUES('LunaLive', 'luna@gmail.com', '98765', '1 año', 'PC Gamer', '2026-05-17')";

            sentencia.executeUpdate(sql1);
            sentencia.executeUpdate(sql2);
            sentencia.executeUpdate(sql3);

            System.out.println("3 usuarios insertados correctamente");

        } catch (Exception e) {

            System.out.println("Error: " + e);

        }

    }
}