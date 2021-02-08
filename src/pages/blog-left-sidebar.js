import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import PageWrapper from "../components/PageWrapper";
import { Section, Title, Text } from "../components/Core";

import BlogList from "../sections/blog/BlogListSidebar";
import Sidebar from "../sections/blog/Sidebar";

const BlogLeftSidebar = () => {
  return (
    <>
      <PageWrapper footerDark>
        <Section className="pb-0">
          <div className="pt-5"></div>
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg="8">
                <Title variant="hero">Blog Left Sidebar</Title>
                <Text>
                  Elevating Services & Technology Solutions – 
                  Delivering for a better tomorrow!
                </Text>
              </Col>
            </Row>
          </Container>
        </Section>
        <Section>
          <Container>
            <Row>
              <Col lg="8" className="order-lg-2 mb-5">
                <BlogList />
              </Col>
              <Col lg="4" className="order-lg-1">
                <Sidebar />
              </Col>
            </Row>
          </Container>
        </Section>
      </PageWrapper>
    </>
  );
};
export default BlogLeftSidebar;
