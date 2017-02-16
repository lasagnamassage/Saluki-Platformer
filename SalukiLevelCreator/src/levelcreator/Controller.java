package levelcreator;

import java.awt.Dimension;
import java.awt.Toolkit;
import java.io.IOException;

import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.control.TextField;
import javafx.scene.text.Text;
import javafx.stage.Stage;

public class Controller {
	
	
	@FXML private Text failmessage;
	@FXML private TextField widthField;
	@FXML private TextField heightField;
	protected int  width;
	protected int height;
	Dimension screenSize = Toolkit.getDefaultToolkit().getScreenSize();
	protected double screenWidth = screenSize.getHeight();
	protected double screenHeight = screenSize.getWidth();
	
	@FXML protected void handleSubmitButtonAction(ActionEvent event) throws IOException
	{
		if(widthField.getText().isEmpty() || heightField.getText().isEmpty())
		{
			failmessage.setText("Populate the fields first, fam");
		}
		else
		{
			width = Integer.parseInt(widthField.getText());
			height = Integer.parseInt(heightField.getText());
			Stage stage = (Stage) heightField.getScene().getWindow();
			stage.close();
			//Parent root = FXMLLoader.load(getClass().getResource("Model2.fxml"));
			//stage = new Stage();
			//stage.setTitle("SP Level Designer");
				/*
				Scene scene= new Scene(root,screenWidth,screenHeight);
				stage.setScene(scene);
				stage.show();
				*/
			
		}
	}
	
}
