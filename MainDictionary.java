package Dicton;
import javax.swing.JFrame;

public class MainDictionary {
	
    public static void main(String[] args) {
        
        JFrame frame = new JFrame("Dictionary.txt");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        DictionaryPanel d = new DictionaryPanel();
        frame.add(d);
        frame.setSize(620,620);
        frame.setVisible(true);
        
    }
}
