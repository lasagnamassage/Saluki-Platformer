import javax.swing.JTextArea;
import javax.swing.JTextField;
import javax.swing.ImageIcon;
import javax.swing.JLabel;

/**
 * TextArea object.
 * 
 * Provides a simple way to instantiate a place to put text
 * @author A'Shaun Thomas
 *
 */
public class TextArea {

	/**
	 * Label Constructor 1
	 * @param text The text to be displayed (not editable)
	 * @param placement The placement of the text (See javax.swing.SwingConstants)
	 */
	TextArea(String text, int placement)
	{
		JLabel label1 = new JLabel(text,placement);
	}
	
	/**
	 * Label Constructor 2
	 * @param text The text to be displayed (not editable)
	 * @param placement The placement of the text (See javax.swing.SwingConstants)
	 * @param icon An icon associated with this image
	 */
	TextArea(String text, int placement,ImageIcon icon)
	{
		JLabel label2 = new JLabel(text,icon,placement);
	}
	
	/**
	 * 
	 */
}
