import express from 'express';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send(null);
});

app.listen(7700, () => {
    console.log('public class main(){public static void main(){system.out.println(\"https://kry137.github.io/wallpaper\");system.out.println("https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1");}}');    
})