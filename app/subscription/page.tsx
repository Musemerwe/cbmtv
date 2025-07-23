'use client'

import Link from 'next/link'
import './subscription.css'

const SubscriptionPage = () => {
  return (
    <div className="subscription-container">
      <h1 className="title">Choose Your CBM TV Package</h1>

      <div className="plans-grid">

        {/* FREE PLAN */}
        <div className="plan-card free">
          <h2>CBM Free</h2>
          <p>Watch with many ads</p>
          <p className="price">UGX 0</p>
          <Link href="/watch-free" className="subscribe-btn">Continue Watching</Link>
        </div>

        {/* PRO PLAN */}
        <div className="plan-card pro">
          <h2>CBM Pro</h2>
          <p>2 ads: start & end</p>
          <p className="price">UGX 1,500/month</p>
          <Link href="/signin" className="subscribe-btn">Subscribe Now</Link>
        </div>

        {/* PLUS PLAN */}
        <div className="plan-card plus">
          <h2>CBM Plus</h2>
          <p>1 ad: end only</p>
          <p className="price">UGX 3,000/month</p>
          <Link href="/signin" className="subscribe-btn">Subscribe Now</Link>
        </div>

        {/* MAX PLAN */}
        <div className="plan-card max">
          <h2>CBM Max</h2>
          <p>No ads at all</p>
          <p className="price">UGX 5,000/month</p>
          <Link href="/signin" className="subscribe-btn">Subscribe Now</Link>
        </div>
      </div>
    </div>
  )
}

export default SubscriptionPage
