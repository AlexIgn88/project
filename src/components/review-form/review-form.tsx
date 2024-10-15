import { Button, Card, Col, Form, Input, Row, Typography, Rate } from "antd";
import { useState } from "react";
import useInput from "../../custom-hooks/use-input";
import styles from "./review-form.module.css";
import { useDispatch } from "react-redux";
import { addReview } from "../../store/action-creators";

const ReviewForm = ({ id }: any) => {
  const [rating, setRating] = useState(0);
  const [name, setName, isValidName, resetName] = useInput();
  const [text, setText, isValidText, resetText] = useInput();
  const dispatch = useDispatch();

  const resetForm = (): void => {
    resetName();
    resetText();
    setRating(0);
  };

  const [form] = Form.useForm();
  const handleSubmit = (evt: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(addReview(name, +rating, text, id));
    resetForm();
  };

  const handleNameChange = setName,
    handleTextChange = setText,
    handleRatingChange = setRating;

  return (
    <Card className={styles.reviewForm}>
      <Row align="middle">
        <Col xs={24} md={18}>
          <Typography.Title className={styles.addReviewTitle} level={4}>
            Leave your review
          </Typography.Title>
          <Form form={form} onFinish={handleSubmit}>
            <Input
              value={name}
              onChange={handleNameChange}
              placeholder={"User name"}
              className={!isValidName ? styles.invalid : ""}
            />
            <Input.TextArea
              value={text}
              onChange={handleTextChange}
              rows={3}
              size="large"
              className={!isValidText ? styles.invalid : ""}
            />
            <div>
              Rating
              <Rate value={rating} onChange={handleRatingChange} />
            </div>
            <Button htmlType="submit" className={styles.submitButton}>
              Send review
            </Button>
          </Form>
        </Col>
      </Row>
    </Card>
  );
};

export default ReviewForm;
