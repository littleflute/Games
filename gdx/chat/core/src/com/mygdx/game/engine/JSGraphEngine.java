package com.mygdx.game.engine;

import com.badlogic.gdx.graphics.Color;
import com.badlogic.gdx.graphics.Pixmap;
import com.badlogic.gdx.scenes.scene2d.ui.Label;
import com.mygdx.game.GdxJSEngineApp;

public class JSGraphEngine {

    private Pixmap pixmap;
    private Label labelMessage;
    private GdxJSEngineApp game;

    private CanvasObj canvas = new CanvasObj();
    private ContextObj context = new ContextObj();
    private ImageObj image = new ImageObj();
    private static String CANVAS_NAME = "canvas";

    public JSGraphEngine(Pixmap pix, Label lb, GdxJSEngineApp o){
        pixmap = pix;
        labelMessage = lb;
        game = o;
    }

    public CanvasObj getElementById(String id) {
        System.out.println("getElementById:"+id);
        //Just for test here!
        if (CANVAS_NAME.equalsIgnoreCase(id)){
            return  canvas;
        }
        return canvas;
    }

    public void showMessage(String msg){ labelMessage.setText("[WHITE]Message: [][MAROON]"+msg); }
    public ImageObj getImageObj() { return image; }

    public void setTimer(Object o, int n){
        game.setTimer(o,n);
    }

    //Inner Class
    public class CanvasObj {
        public ContextObj getContext(String ctx){
            return context;
        }
    }

    public class ContextObj {
        public  String fillStyle="";

        public void fillRect(int x,int y, int width, int height){
            applayColor();
            pixmap.fillRectangle(x,y,width,height);
        }

        public void drawImage(Object o, int x, int y){
            ImageObj obj = (ImageObj) o;
            System.out.println(obj.src);
            game.drawImage(obj.src, x, y);

        }
        private void applayColor(){
            if ("Blue".equalsIgnoreCase(fillStyle)){
                pixmap.setColor(Color.BLUE);
            }else if ("Red".equalsIgnoreCase(fillStyle)){
                pixmap.setColor(Color.RED);
            }else if ("Yellow".equalsIgnoreCase(fillStyle)){
                pixmap.setColor(Color.YELLOW);
            } else if ("Green".equalsIgnoreCase(fillStyle)){
                pixmap.setColor(Color.GREEN);
            } else if ("White".equalsIgnoreCase(fillStyle)){
                pixmap.setColor(Color.WHITE);
            }else {
                pixmap.setColor(Color.BLACK);
            }
        }
    }

    public class ImageObj {
        public String src="";
    }
}
