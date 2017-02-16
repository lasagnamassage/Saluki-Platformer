package levelcreator;

import java.awt.Dimension;
import java.awt.Toolkit;
import java.io.IOException;

import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.stage.Stage;


public class View extends Application {
	
	@Override
	public void start(Stage stage) throws IOException {
		Parent root = FXMLLoader.load(getClass().getResource("Model.fxml"));
		Scene scene= new Scene(root,300,275);
		stage.setTitle("SPLC Dimensions grabber");
		stage.setScene(scene);
		stage.show();
	}
	
	
	public static void main(String[]args)
	{
		launch(args);
	}
}
