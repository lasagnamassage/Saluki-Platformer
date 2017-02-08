package com.game.launcher;

import java.awt.Graphics2D;
import java.awt.image.BufferedImage;
import java.io.File;

import javax.imageio.ImageIO;

import com.game.engine.Game;
import com.game.engine.GameThread;
import com.game.launcher.screens.ScreenManager;

public class Launcher extends Game{


	protected ScreenManager screenManager;
	
	// The main method which starts the game thread
	public static void main(String[] args){
		
		try{
			
			BufferedImage iconImage = ImageIO.read(new File("res/images/iconImage/controller-icon.png"));
			
			Launcher start = new Launcher("Noise Game Testing", 800, 600, 1, iconImage);
			
			new GameThread(start).start();
			
		} catch(Exception e){
			e.printStackTrace();
		}
	}
	
	public Launcher(String title, int width, int height, int scale, BufferedImage iconImage){
		super(title, width, height, scale, iconImage);
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
