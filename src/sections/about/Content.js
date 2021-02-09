import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Text } from "../../components/Core";

import imgContent1 from "../../assets/image/jpeg/easy-image-2-1.jpg";
import imgContent2 from "../../assets/image/jpeg/easy-image-2-2.jpg";

const ContentImg = styled(Box)`
  box-shadow: ${({ theme }) => `0 42px 54px ${theme.colors.shadow}`};
  border-radius: 10px;
  overflow: hidden;
  max-height: 515px;
`;

const Content = () => (
  <>
    <Section>
      <Container>
        <Row className="justify-content-center pb-4">
          <Col lg="6">
            <Title variant="hero">
              Our mission is to make your life easier.
            </Title>
          </Col>
          <Col lg="6" className="pl-lg-5">
            <Text>
              DT Professional Services is a CMMI Level 2 (Services), SBA certified 8(a) 
              Small Disadvantaged Business, experienced in providing award-winning professional 
              services, custom software solutions, and support services. Established in 2013 
              by founder Nipun Sharma, we bring over 15 years of experience in delivering professional 
              services & solutions for our prestigious clients. 
              
              As a client-centric provider, we use value-driven management and solution-producing 
              methodologies to provide top-tier results for our clients. We are highly regarded 
              and recognized for innovative solutions, thought leadership, project management, 
              and go-to-market strategies with results that have consistently dominated competitive markets.
            </Text>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col lg="4" sm="5" className="mb-4 ">
            <ContentImg>
              <img src={imgContent1} alt="" className="img-fluid" />
            </ContentImg>
          </Col>
          <Col lg="8" sm="7" className="mb-4">
            <ContentImg>
              <img src={imgContent2} alt="" className="img-fluid" />
            </ContentImg>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
);

export default Content;
