import javax.swing.*;
/**
 * WindowMaker object.
 * <p>Provides a way to make windows</p>
 * @author A'Shaun Thomas
 *
 */
public class WindowCreator {
	/**
	 * Constructor.
	 * @param title The title of the window
	 * @param width The wideness of the window
	 * @param length The height of the window
	 */
	WindowCreator(String title, int width, int length)
	{
		JFrame frame = new JFrame(title);
		frame.setSize(width,length);
		frame.setLocationRelativeTo(null);
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		frame.setVisible(true);
	}
	
	
}
