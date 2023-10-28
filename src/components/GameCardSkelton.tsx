import { Card, Skeleton, CardBody, SkeletonText } from '@chakra-ui/react';

const GameCardSkelton = () => {
    return (
        <Card width="250px" >
            <Skeleton height="220px" />
            <CardBody>
                <SkeletonText />
            </CardBody>
        </Card>
    )
}

export default GameCardSkelton
