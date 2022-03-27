import clsx from 'clsx'
import React from 'react'
import Card from './Card/Card'
import Styles from './MyStake.module.css'

const MyStake = ({
  withdrawInput, 
  stakeInput, 
  onChangeInput, 
  onClickStake, 
  onClickWithdraw,
  rewardAmount,
  stakeAmount,
  connected,
  onGetAddressBalance,
  addressInput,
  showAddBalance,
  stakeDetails
}) => {
  return (
    <div className={Styles.root}>
        <h2 className={Styles.heading}>My stake</h2>

        <div className={Styles.stake_body}>
          <div className={Styles.card_container}>
            <Card 
              cardKey="Total Staked"
              cardValue = {stakeAmount}
            />
            <Card 
              cardKey="Total Reward"
              cardValue = {rewardAmount}
            />
          </div>
          <form onSubmit={onClickStake} className={Styles.form} >
            <input 
              type = "number" 
              placeholder="Amount to stake" 
              className={Styles.input}
              value = {stakeInput}
              onChange = {onChangeInput}
              id = "stake"
            />
            <button type='submit' className={clsx({[Styles.stake_btn]: true, [Styles.btn_diabled]: !connected})}
              disabled = {!connected}
            >Stake</button>
          </form>

          <form onSubmit = {onClickWithdraw} className={Styles.form} >
            <input 
              type = "number" 
              placeholder="Amount to unstake" 
              className={Styles.input}
              value = {withdrawInput}
              onChange = {onChangeInput}
              id = "unstake"
            />
            <button type="submit"
            className={clsx({[Styles.unstake_btn]: true, [Styles.btn_diabled]: !connected})}
            disabled = {!connected}
            >Unstake</button>
          </form>
          <div className={Styles.form_group}>
            <form onSubmit = {onGetAddressBalance} className={Styles.form} >
              <input 
                type = "text" 
                placeholder="Search by address" 
                className={Styles.input}
                value = {addressInput}
                onChange = {onChangeInput}
                id ="address"
              />
              <button type="submit"
              className={clsx({[Styles.stake_btn]: true, })}
              >Search</button>
            </form>
            <div className={Styles.balance}>
              {showAddBalance && (
                <p>Balance: {stakeDetails.amount? `${stakeDetails.amount} BRT` : 0.0}</p>
              )}
            </div>
          </div>
        </div>
    </div>
  )
}

export default MyStake