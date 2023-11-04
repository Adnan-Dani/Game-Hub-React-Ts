// Ui
import { Image, ImageProps } from "@chakra-ui/react"

interface Props {
    rating: number
}
const Emoji = ({ rating }: Props) => {
    const bullsEye = "https://w7.pngwing.com/pngs/336/562/png-transparent-emojipedia-text-messaging-sms-sticker-emoji-service-logo-bullseye.png"
    const thumbsUp = "https://i.pinimg.com/736x/8a/23/8a/8a238a0cdf18b6ce6da1eac02a84eafd.jpg"
    const meh = "https://i.pinimg.com/736x/7f/d4/8b/7fd48b6fd2fcd6a0cfbdddd83fd447e9.jpg"

    const emojiMap: { [key: number]: ImageProps } = {
        3: { src: meh, alt: "meh", boxSize: "25px" },
        4: { src: thumbsUp, alt: "recommended", boxSize: "25px" },
        5: { src: bullsEye, alt: "exveptional", boxSize: "25px" },
    }
    return (
        <Image {...emojiMap[rating]} />
    )
}

export default Emoji