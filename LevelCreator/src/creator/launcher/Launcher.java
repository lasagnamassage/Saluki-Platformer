package creator.launcher;

import java.awt.Graphics2D;
import creator.engine.Game;
import creator.engine.GameThread;
import creator.launcher.screens.ScreenManager;

public class Launcher extends Game{


	protected ScreenManager screenManager;
	
	// The main method which starts the game thread
	public static void main(String[] args){
		
		try{
			
			Launcher start = new Launcher("Noise Game Testing", 800, 600, 1);
			
			new GameThread(start).start();
			
		} catch(Exception e){
			e.printStackTrace();
		}
	}
	
	public Launcher(String title, int width, int height, int scale){
		super(title, width, height, scale);
		// TODO: in here set the current screen using this
		// screenManager.setScreen(new MenuScreen());
	}
	
	// Anything inside the update() function will run from the loop
	@Override
	public void update() {
		// screenManager.getCurrentScreen().update();
	}

	@Override
	public void draw(Graphics2D g) {
		// screenManager.getCurrentScreen().draw(g);
	}
}
