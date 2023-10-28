import { Card, Skeleton, CardBody, SkeletonText } from '@chakra-ui/react';

const GameCardSkelton = () => {
    return (
        <Card overflow="hidden" borderRadius={10} width="250px" >
            <Skeleton height="220px" />
            <CardBody>
                <SkeletonText />
            </CardBody>
        </Card>
    )
}

export default GameCardSkelton
