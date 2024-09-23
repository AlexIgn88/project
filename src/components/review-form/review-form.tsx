import {Button, Card, Col, Form, Input, Row, Typography, Rate} from 'antd';
// import { FormInstance } from 'antd/lib/form';
import {useState} from 'react';
import useInput from '../../custom-hooks/use-input';
// import cx from 'classnames';
// import i18n from '../../decorators/i18n';
import styles from './review-form.module.css';
import {useDispatch} from 'react-redux';
import {addReview} from '../../store/action-creators';


const ReviewForm = ({id}: any
//     {
//     id, t
// }
) => {

  const [rating, setRating] = useState(0);
  const [name, setName, isValidName, resetName] = useInput();
  const [text, setText, isValidText, resetText] = useInput();
  const dispatch = useDispatch();

  const resetForm = (): void => {
    resetName()
    resetText()
    setRating(0)
  }

  const [form] = Form.useForm();
  const handleSubmit = (evt: React.MouseEvent<HTMLButtonElement>) => {
    // evt.preventDefault()
    dispatch(addReview(name, +rating, text, id))
    // console.log(`dispatch(addReview(${name}, ${+rating}, ${text}, ${id}))`)
    resetForm()
  };

  const 
       handleNameChange = setName,
       handleTextChange = setText,
       handleRatingChange = setRating;

  return (
    <Card className={styles.reviewForm}>
      <Row 
    //   type="flex" 
      align="middle">
        <Col 
        xs={24} 
        md={18} 
        // align="left"
        >
          <Typography.Title 
          className={styles.addReviewTitle} 
          level={4}>
            {/* {t('Leave your review')} */}
            Leave your review
          </Typography.Title>
          <Form 
        //   onSubmit={handleSubmit}
        form={form} 
        onFinish={handleSubmit}
          >
            <Input
              value={name}
              onChange={handleNameChange}
            //   placeholder={t('User name')}
            placeholder={'User name'}
            //   className={cx(
            //     {
            //       [styles.invalid]: !isValidName,
            //     },
            //     styles.inputName
            //   )}
            className={!isValidName ? styles.invalid : ''}
            />
            <Input.TextArea
              value={text}
              onChange={handleTextChange}
              rows={3}
              size="large"
            //   className={cx({
            //     [styles.invalid]: !isValidText,
            //   })}
            className={!isValidText ? styles.invalid : ''}
            />
            <div>
              {/* {t('Rating')}:{' '} */}
            Rating
              <Rate value={rating} onChange={handleRatingChange} />
            </div>
            <Button htmlType="submit" className={styles.submitButton}>
              {/* {t('Send review')} */}
               Send review
            </Button>
          </Form>
        </Col>
      </Row>
    </Card>
  )
}

// export default i18n(ReviewForm);
export default ReviewForm;