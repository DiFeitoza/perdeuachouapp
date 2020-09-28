import React from 'react'
import {Ionicons} from '@expo/vector-icons'

import {
  Container,
  Title,
  BoxIconLeft,
  BoxIconRight
} from './styles';

interface PageHeaderProps{
  title: string;

}

const PageHeader: React.FC<PageHeaderProps> = ({title}) => {
  // console.log(props);
  // navigation.openDrawer();

  return(
    <Container>

      <BoxIconLeft onPress={()=> console.log("eu")}>
        <Ionicons name="ios-menu" size={35} color={ '#000'} />
      </BoxIconLeft>

      <Title>{title}</Title>

      <BoxIconRight onPress={()=>console.log("notify")}>
        <Ionicons name="ios-notifications-outline" size={35} color={ '#000'} />
      </BoxIconRight>
    </Container>
  );
}
export default PageHeader;