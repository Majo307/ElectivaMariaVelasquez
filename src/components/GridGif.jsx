import{motion} from 'framer-motion'

const variants={
    initial:{
        opacity:0, scale:0
    },
    animate:{
        opacity:1, 
        scale:1,
         transition:{
            duration: 1
        }
    }
}
export const GridGif = ({gifs}) => {
    return(
        
        <div className="grid-gifs">
        {
            gifs.map(gif => (
                
                <motion.img className="gif"
                initial="initial"
                animate="animate"
                variants={variants}
                key={gif.id} src={gif.images.original.url} />
            )
                )
        }
        </div>
        
    
    )
}

